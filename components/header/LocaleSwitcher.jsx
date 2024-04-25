"use client"
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { useLocale } from "next-intl";

export default function LocaleSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const localActive = useLocale();

  const onSelectChange = (e) => {
    const nextLocal = e.target.value;
    startTransition(() => {
      router.replace(`/${nextLocal}`)
    })
  };

  return (
    <label className="border-2 rounded">
        <select defaultValue={localActive} onChange={onSelectChange} disabled={isPending}>
            <option value="en">ENG</option>
            <option value="ka">GEO</option>
        </select>
    </label>
  );
}
