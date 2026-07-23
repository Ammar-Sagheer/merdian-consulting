import Link from "next/link";
import { notFound } from "next/navigation";
import { getLeadById } from "@/app/_lib/data-service";
import { SERVICES } from "@/app/_data/services";
import LeadStatusUpdater from "@/app/_components/admin/LeadStatusUpdater";
import AdminFadeIn from "@/app/_components/admin/AdminFadeIn";

export default async function LeadDetailPage({ params }) {
  const { leadId } = await params;
  const lead = await getLeadById(leadId);

  if (!lead) {
    notFound();
  }

  const service = SERVICES.find((s) => s.id === lead.service_id);

  return (
    <AdminFadeIn>
      <div data-admin-fade className="mb-6">
        <Link
          href="/admin"
          className="text-sm font-medium text-neutral-500 hover:text-primary-600"
        >
          ← Back to leads
        </Link>
      </div>

      <div
        className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between"
        data-admin-fade
      >
        <div>
          <h1 className="text-2xl font-semibold text-neutral-900">
            {lead.full_name}
          </h1>
          <p className="text-sm text-neutral-500">
            Submitted {new Date(lead.created_at).toLocaleString()}
          </p>
        </div>
        <LeadStatusUpdater leadId={lead.id} currentStatus={lead.status} />
      </div>

      <div
        className="grid gap-6 lg:grid-cols-3"
        data-admin-fade
      >
        <dl className="space-y-4 rounded-lg border border-neutral-200 bg-white p-5 text-sm lg:col-span-1">
          <div>
            <dt className="font-medium text-neutral-700">Email</dt>
            <dd className="text-neutral-600">
              <a
                href={`mailto:${lead.email}`}
                className="text-primary-600 hover:underline"
              >
                {lead.email}
              </a>
            </dd>
          </div>
          {lead.phone && (
            <div>
              <dt className="font-medium text-neutral-700">Phone</dt>
              <dd className="text-neutral-600">{lead.phone}</dd>
            </div>
          )}
          <div>
            <dt className="font-medium text-neutral-700">Service</dt>
            <dd className="text-neutral-600">
              {service?.name || lead.service_id}
            </dd>
          </div>
          {lead.ai_tags?.length > 0 && (
            <div>
              <dt className="font-medium text-neutral-700">Tags</dt>
              <dd className="mt-1 flex flex-wrap gap-1.5">
                {lead.ai_tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-primary-50 px-2 py-0.5 text-xs font-medium text-primary-700"
                  >
                    {tag}
                  </span>
                ))}
              </dd>
            </div>
          )}
        </dl>

        <div className="space-y-6 lg:col-span-2">
          {lead.ai_summary && (
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <h2 className="text-sm font-semibold text-neutral-900">
                AI Summary
              </h2>
              <p className="mt-2 text-sm text-neutral-600">
                {lead.ai_summary}
              </p>
            </div>
          )}

          <div className="rounded-lg border border-neutral-200 bg-white p-5">
            <h2 className="text-sm font-semibold text-neutral-900">
              Project Description
            </h2>
            <p className="mt-2 whitespace-pre-wrap text-sm text-neutral-600">
              {lead.problem_description}
            </p>
          </div>

          {service?.followUpQuestions?.length > 0 && (
            <div className="rounded-lg border border-neutral-200 bg-white p-5">
              <h2 className="text-sm font-semibold text-neutral-900">
                Follow-up Answers
              </h2>
              <dl className="mt-2 space-y-3 text-sm">
                {service.followUpQuestions.map((q) => (
                  <div key={q.id}>
                    <dt className="text-neutral-500">{q.label}</dt>
                    <dd className="text-neutral-800">
                      {lead.follow_up_answers?.[q.id] || "—"}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          )}
        </div>
      </div>
    </AdminFadeIn>
  );
}
