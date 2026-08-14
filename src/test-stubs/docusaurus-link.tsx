// Stub for @docusaurus/Link, aliased in vitest.config.mts. Docusaurus's
// real module isn't resolvable outside a Docusaurus app; tests override
// this via vi.mock when they need to assert on rendered link behavior.
import type {ReactNode} from 'react';

export default function Link({to, children}: {to: string; children: ReactNode}): ReactNode {
  return <a href={to}>{children}</a>;
}
