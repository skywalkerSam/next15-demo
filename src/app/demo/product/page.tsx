import { getPrice, getProductDescription } from "@/app/lib/data";

export default function Page() {
  const description: string = getProductDescription();
  const price: string = getPrice();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <header>
            <h1 className="text-5xl text-green-500 mb-3">$ {price}</h1>
            <h2 className="text-xl text-blue-500">{description}</h2>
          </header>
        </div>
      </main>
    </div>
  );
}
