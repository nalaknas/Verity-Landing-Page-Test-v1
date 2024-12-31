import { Building2 } from 'lucide-react';

const companies = [
  {
    name: "TechCorp",
    logo: "https://images.unsplash.com/photo-1516387938699-a93567ec168e?w=200&h=100&fit=crop&auto=format",
    employees: "5,000+",
    metric: "40% faster hiring"
  },
  {
    name: "DataFlow",
    logo: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=200&h=100&fit=crop&auto=format",
    employees: "1,000+",
    metric: "50% cost reduction"
  },
  {
    name: "CloudScale",
    logo: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&h=100&fit=crop&auto=format",
    employees: "2,500+",
    metric: "45% better matches"
  },
  {
    name: "InnovateTech",
    logo: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&h=100&fit=crop&auto=format",
    employees: "3,000+",
    metric: "60% time saved"
  }
];

export function TrustedBy() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Trusted by Industry Leaders
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Join thousands of companies that trust Verity for their technical hiring needs.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-4">
          {companies.map((company) => (
            <div
              key={company.name}
              className="flex flex-col items-center rounded-lg bg-gray-50 p-6 transition-transform hover:scale-105"
            >
              <div className="relative h-12 w-full">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-full w-full object-cover rounded"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50/80 to-transparent" />
              </div>
              <div className="mt-4 text-center">
                <h3 className="font-semibold text-gray-900">{company.name}</h3>
                <p className="text-sm text-gray-600">{company.employees} employees</p>
                <p className="mt-2 text-sm font-medium text-blue-600">
                  {company.metric}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}