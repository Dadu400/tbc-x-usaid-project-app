'use client';

import clsx from 'clsx';
import {useParams} from 'next/navigation';
import {useTransition} from 'react';
import {useRouter, usePathname} from '@/navigation';

export default function LocaleSwitcherSelect({
  children,
  defaultValue,
  label
}) {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const params = useParams();

  function onSelectChange(event) {
    const nextLocale = event.target.value;
    startTransition(() => {
      router.replace(
        {pathname, params},
        {locale: nextLocale}
      );
    });
  }

  return (
    <label
      className={clsx(
        'relative text-gray-400',
        isPending && 'transition-opacity [&:disabled]:opacity-30'
      )}
    >
      <p className="sr-only">{label}</p>
      <select
        className="w-full inline-flex items-center justify-center bg-[#FD8024] border border-solid border-[#FD8024] rounded-md px-2 py-1 font-medium text-lg leading-6 uppercase"
        defaultValue={defaultValue}
        disabled={isPending}
        onChange={onSelectChange}
      >
        {children}
      </select>
    </label>
  );
}