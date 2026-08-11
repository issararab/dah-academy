import { BOOKS } from "../../content/books";
import { BookCard } from "../ui/BookCard";
import { FadeIn } from "../ui/FadeIn";
import { SectionHeading } from "../ui/SectionHeading";

export function Books() {
  return (
    <section id="books" className="px-[5vw] py-24 bg-navy">
      <SectionHeading
        eyebrow="From the DAH Academy Store"
        title="eBooks & Playbooks You Can Apply Today"
        intro="Practical, evidence-based guides on data platforms, modelling, AI agents, and forecasting, written for practitioners and decision-makers. Every purchase is handled securely through Payhip."
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {BOOKS.map((book, i) => (
          <FadeIn key={book.slug} delay={i * 0.06}>
            <BookCard book={book} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
