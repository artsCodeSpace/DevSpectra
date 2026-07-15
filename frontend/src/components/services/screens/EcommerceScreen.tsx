import { useState } from "react";
import { Plus, Minus, ShoppingBag } from "lucide-react";

const PRODUCTS = [
  { id: 1, name: "Aurora Hoodie", price: 89, emoji: "🧥" },
  { id: 2, name: "Nebula Sneakers", price: 149, emoji: "👟" },
  { id: 3, name: "Prism Watch", price: 229, emoji: "⌚" },
];

export function EcommerceScreen() {
  const [cart, setCart] = useState<Record<number, number>>({});

  const add = (id: number) => setCart((c) => ({ ...c, [id]: (c[id] ?? 0) + 1 }));
  const sub = (id: number) =>
    setCart((c) => {
      const n = (c[id] ?? 0) - 1;
      const next = { ...c };
      if (n <= 0) delete next[id];
      else next[id] = n;
      return next;
    });

  const total = PRODUCTS.reduce((s, p) => s + (cart[p.id] ?? 0) * p.price, 0);
  const count = Object.values(cart).reduce((a, b) => a + b, 0);

  return (
    <div className="flex h-full flex-col px-4 pb-4 pt-12 text-white">
      <div className="mb-3 mt-2 flex items-center justify-between">
        <div>
          <div className="text-[10px] uppercase tracking-widest text-white/50">Shop</div>
          <div className="text-sm font-semibold">Featured</div>
        </div>
        <div className="relative flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500 to-pink-500">
          <ShoppingBag className="h-4 w-4" />
          {count > 0 && (
            <span className="absolute -right-1 -top-1 flex h-4 min-w-4 items-center justify-center rounded-full bg-white px-1 text-[9px] font-bold text-black">
              {count}
            </span>
          )}
        </div>
      </div>

      <div className="space-y-2">
        {PRODUCTS.map((p) => (
          <div key={p.id} className="flex items-center gap-2 rounded-xl bg-white/5 p-2">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-fuchsia-500/30 to-pink-500/30 text-2xl">
              {p.emoji}
            </div>
            <div className="min-w-0 flex-1">
              <div className="truncate text-[12px] font-medium">{p.name}</div>
              <div className="text-[11px] text-fuchsia-300">${p.price}</div>
            </div>
            {cart[p.id] ? (
              <div className="flex items-center gap-1.5 rounded-full bg-white/10 px-1 py-0.5">
                <button onClick={() => sub(p.id)} className="rounded-full p-1 hover:bg-white/10">
                  <Minus className="h-3 w-3" />
                </button>
                <span className="w-4 text-center text-[11px] font-bold">{cart[p.id]}</span>
                <button onClick={() => add(p.id)} className="rounded-full p-1 hover:bg-white/10">
                  <Plus className="h-3 w-3" />
                </button>
              </div>
            ) : (
              <button
                onClick={() => add(p.id)}
                className="rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 px-3 py-1 text-[10px] font-semibold active:scale-95"
              >
                Add
              </button>
            )}
          </div>
        ))}
      </div>

      <div className="mt-auto rounded-xl border border-white/10 bg-white/5 p-3">
        <div className="mb-2 flex items-center justify-between text-[11px]">
          <span className="text-white/60">Total</span>
          <span className="font-bold">${total}</span>
        </div>
        <button
          disabled={!count}
          className="w-full rounded-lg bg-gradient-to-r from-fuchsia-500 to-pink-500 py-2 text-[11px] font-semibold shadow-lg shadow-fuchsia-500/30 transition active:scale-95 disabled:opacity-40"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}
