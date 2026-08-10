import type { Book } from "../../content/books";
import { Card } from "./Card";

interface BookCardProps {
  book: Book;
}

export function BookCard({ book }: BookCardProps) {
  return (
    <article
      itemScope
      itemType="https://schema.org/Product"
      className="h-full"
    >
      <Card className="flex flex-col overflow-hidden group">
        <div className="relative aspect-[2/3] w-full overflow-hidden bg-navy-mid">
          <picture>
            <source srcSet={book.coverWebp} type="image/webp" />
            <img
              src={book.coverJpg}
              alt={`Cover of ${book.title}`}
              itemProp="image"
              width={600}
              height={900}
              loading="lazy"
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </picture>
          <div className="absolute top-3 right-3 bg-navy-deep/85 border border-cyan/25 text-cyan text-sm font-bold px-3 py-1 rounded-full">
            <span itemProp="offers" itemScope itemType="https://schema.org/Offer">
              <meta itemProp="priceCurrency" content={book.currency} />
              <meta itemProp="url" content={book.buyUrl} />
              <link itemProp="availability" href="https://schema.org/InStock" />
              <span itemProp="price" content={String(book.price)}>
                ${book.price.toFixed(2)}
              </span>
            </span>
          </div>
        </div>
        <div className="p-6 flex flex-col flex-1 gap-3">
          <h3
            itemProp="name"
            className="font-heading font-bold text-[1.02rem] leading-snug"
          >
            {book.title}
          </h3>
          <p
            itemProp="description"
            className="text-sm text-[rgba(200,215,255,.6)] leading-relaxed flex-1"
          >
            {book.description}
          </p>
          <a
            href={book.buyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline mt-2 inline-flex items-center justify-center gap-2 rounded-lg font-semibold text-sm px-5 py-2.5"
          >
            Buy on Payhip ↗
          </a>
        </div>
      </Card>
    </article>
  );
}
