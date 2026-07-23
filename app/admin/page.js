import { getLeads, getLeadStatusCounts } from "@/app/_lib/data-service";
import LeadStatusUpdater from "@/app/_components/admin/LeadStatusUpdater";
import AdminFadeIn from "@/app/_components/admin/AdminFadeIn";
import Link from "next/link";

const STATUS_FILTERS = ["all", "New", "Meeting Scheduled", "Archived"];

export default async function AdminDashboardPage({ searchParams }) {
  const params = await searchParams;
  const statusFilter = params?.status || "all";
  const sortDir = params?.sort === "asc" ? "asc" : "desc";
  const search = params?.search || "";
  const page = Math.max(1, Number(params?.page) || 1);

  const [{ leads, totalCount, pageSize }, statusCounts] = await Promise.all([
    getLeads({ statusFilter, sortDir, search, page }),
    getLeadStatusCounts(),
  ]);

  const totalPages = Math.max(1, Math.ceil(totalCount / pageSize));

  function buildHref({
    status = statusFilter,
    sort = sortDir,
    searchTerm = search,
    pageNum = page,
  } = {}) {
    const query = new URLSearchParams();
    if (status !== "all") query.set("status", status);
    if (sort !== "desc") query.set("sort", sort);
    if (searchTerm) query.set("search", searchTerm);
    if (pageNum !== 1) query.set("page", String(pageNum));
    const qs = query.toString();
    return `/admin${qs ? `?${qs}` : ""}`;
  }

  return (
    <AdminFadeIn key={`${statusFilter}-${sortDir}-${search}-${page}`}>
      <div
        className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
        data-admin-fade
      >
        <h1 className="text-2xl font-semibold text-neutral-900">Leads</h1>

        <div className="flex flex-wrap gap-2">
          {STATUS_FILTERS.map((status) => (
            <Link
              key={status}
              href={buildHref({ status, pageNum: 1 })}
              className={`rounded-md px-3 py-1 text-xs font-medium ${
                statusFilter === status
                  ? "bg-primary-600 text-white"
                  : "border border-neutral-300 text-neutral-600 hover:bg-neutral-50"
              }`}
            >
              {status === "all" ? "All" : status}{" "}
              <span
                className={
                  statusFilter === status
                    ? "text-primary-100"
                    : "text-neutral-400"
                }
              >
                {statusCounts[status]}
              </span>
            </Link>
          ))}
        </div>
      </div>

      <form
        method="GET"
        action="/admin"
        className="mb-4 flex gap-2"
        data-admin-fade
      >
        {statusFilter !== "all" && (
          <input type="hidden" name="status" value={statusFilter} />
        )}
        {sortDir !== "desc" && (
          <input type="hidden" name="sort" value={sortDir} />
        )}
        <input
          type="search"
          name="search"
          defaultValue={search}
          placeholder="Search by name or email…"
          className="w-full max-w-sm rounded-md border border-neutral-300 px-3 py-2 text-sm focus:border-primary-500 focus:outline-none focus:ring-1 focus:ring-primary-500"
        />
        <button
          type="submit"
          className="rounded-md border border-neutral-300 px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50"
        >
          Search
        </button>
        {search && (
          <Link
            href={buildHref({ searchTerm: "", pageNum: 1 })}
            className="rounded-md px-4 py-2 text-sm font-medium text-neutral-500 hover:text-neutral-700"
          >
            Clear
          </Link>
        )}
      </form>

      {leads.length === 0 ? (
        <p className="text-neutral-600" data-admin-fade>
          No leads found.
        </p>
      ) : (
        <div
          className="overflow-x-auto rounded-lg border border-neutral-200 bg-white"
          data-admin-fade
        >
          <table className="w-full text-left text-sm">
            <thead className="border-b border-neutral-200 bg-neutral-50">
              <tr>
                <th
                  scope="col"
                  className="px-4 py-3 font-medium text-neutral-700"
                >
                  Name
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 font-medium text-neutral-700"
                >
                  Email
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 font-medium text-neutral-700"
                >
                  Service
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 font-medium text-neutral-700"
                >
                  <Link
                    href={buildHref({ sort: sortDir === "asc" ? "desc" : "asc" })}
                    aria-label={`Sort by date submitted, currently ${sortDir === "asc" ? "oldest first" : "newest first"}`}
                  >
                    Submitted {sortDir === "asc" ? "↑" : "↓"}
                  </Link>
                </th>
                <th
                  scope="col"
                  className="px-4 py-3 font-medium text-neutral-700"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr
                  key={lead.id}
                  className="border-b border-neutral-100 last:border-0 hover:bg-neutral-50"
                >
                  <td className="px-4 py-3 text-neutral-900">
                    <Link
                      href={`/admin/leads/${lead.id}`}
                      className="font-medium text-primary-600 hover:underline"
                    >
                      {lead.full_name}
                    </Link>
                  </td>
                  <td className="px-4 py-3 text-neutral-600">{lead.email}</td>
                  <td className="px-4 py-3 text-neutral-600">
                    {lead.service_id}
                  </td>
                  <td className="px-4 py-3 text-neutral-600">
                    {new Date(lead.created_at).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3">
                    <LeadStatusUpdater
                      leadId={lead.id}
                      currentStatus={lead.status}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {totalPages > 1 && (
        <div
          className="mt-4 flex items-center justify-between text-sm text-neutral-600"
          data-admin-fade
        >
          <span>
            Page {page} of {totalPages} &middot; {totalCount} lead
            {totalCount === 1 ? "" : "s"}
          </span>
          <div className="flex gap-2">
            <Link
              href={buildHref({ pageNum: Math.max(1, page - 1) })}
              aria-disabled={page <= 1}
              className={`inline-flex items-center gap-1 rounded-md border px-3 py-1.5 font-medium transition ${
                page <= 1
                  ? "pointer-events-none border-neutral-200 text-neutral-300"
                  : "border-neutral-300 text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50"
              }`}
            >
              <span aria-hidden="true">←</span> Previous
            </Link>
            <Link
              href={buildHref({ pageNum: Math.min(totalPages, page + 1) })}
              aria-disabled={page >= totalPages}
              className={`inline-flex items-center gap-1 rounded-md border px-3 py-1.5 font-medium transition ${
                page >= totalPages
                  ? "pointer-events-none border-neutral-200 text-neutral-300"
                  : "border-neutral-300 text-neutral-700 hover:border-neutral-400 hover:bg-neutral-50"
              }`}
            >
              Next <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      )}
    </AdminFadeIn>
  );
}
