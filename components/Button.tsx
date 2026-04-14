export function PrimaryButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="bg-secondary text-black px-6 py-3 rounded-md font-bold hover:opacity-90 transition">
      {children}
    </button>
  );
}

export function OutlineButton({ children }: { children: React.ReactNode }) {
  return (
    <button className="border border-gray-600 text-white px-6 py-3 rounded-md hover:bg-white hover:text-black transition">
      {children}
    </button>
  );
}