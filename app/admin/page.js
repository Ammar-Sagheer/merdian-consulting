import { getLeads } from "@/app/_lib/data-service";

export default async function AdminDashboardPage() {
  const leads = await getLeads();

  return (
    <div>
      <h1 className="mb-6 text-2xl font-semibold text-neutral-900">Leads</h1>

      {leads.length === 0 ? (
        <p className="text-neutral-600">No leads yet.</p>
      ) : (
        <div className="overflow-x-auto rounded-lg border border-neutral-200 bg-white">
          <table className="w-full text-left text-sm">
            <thead className="border-b border-neutral-200 bg-neutral-50">
              <tr>
                <th className="px-4 py-3 font-medium text-neutral-700">Name</th>
                <th className="px-4 py-3 font-medium text-neutral-700">
                  Email
                </th>
                <th className="px-4 py-3 font-medium text-neutral-700">
                  Service
                </th>
                <th className="px-4 py-3 font-medium text-neutral-700">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {leads.map((lead) => (
                <tr
                  key={lead.id}
                  className="border-b border-neutral-100 last:border-0"
                >
                  <td className="px-4 py-3 text-neutral-900">
                    {lead.full_name}
                  </td>
                  <td className="px-4 py-3 text-neutral-600">{lead.email}</td>
                  <td className="px-4 py-3 text-neutral-600">
                    {lead.service_id}
                  </td>
                  <td className="px-4 py-3 text-neutral-600">{lead.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
