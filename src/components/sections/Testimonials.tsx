const testimonials = [
  {
    quote: "Verity has transformed our technical hiring process. We've reduced time-to-hire by 60% while finding better matches for our team.",
    author: "Sarah Chen",
    role: "CTO at TechFlow",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&h=200"
  },
  {
    quote: "The AI-powered matching is incredible. It's like having a technical recruiter who works 24/7 and never misses a detail.",
    author: "Michael Rodriguez",
    role: "Engineering Manager at CloudScale",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&h=200"
  },
  {
    quote: "We've seen a significant improvement in the quality of candidates since switching to Verity. The platform pays for itself.",
    author: "Emily Thompson",
    role: "Head of Talent at DataDrive",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&h=200"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Don't just take our word for it. Here's what industry leaders have to say about Verity.
          </p>
        </div>
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="rounded-lg bg-white p-8 shadow-md"
            >
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-600">{testimonial.role}</div>
                </div>
              </div>
              <p className="mt-6 text-gray-600">"{testimonial.quote}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}