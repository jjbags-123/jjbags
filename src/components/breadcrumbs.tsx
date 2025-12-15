
'use client';

import Link from 'next/link';
import { Fragment } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { cn } from '@/lib/utils';

type BreadcrumbItem = {
  label: string;
  href: string;
  isCurrent?: boolean;
};

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  className?: string;
}

export function Breadcrumbs({ items, className }: BreadcrumbsProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('text-sm text-muted-foreground', className)}>
      <ol className="flex items-center space-x-2">
        {items.map((item, index) => (
          <Fragment key={item.href}>
            <li>
              <Link
                href={item.href}
                className={cn(
                  'transition-colors hover:text-foreground',
                  item.isCurrent && 'font-semibold text-foreground pointer-events-none'
                )}
                aria-current={item.isCurrent ? 'page' : undefined}
              >
                {item.label}
              </Link>
            </li>
            {index < items.length - 1 && (
              <li aria-hidden="true">
                <FiChevronRight className="h-4 w-4" />
              </li>
            )}
          </Fragment>
        ))}
      </ol>
    </nav>
  );
}
