import 'react';

declare module 'react' {
  interface LinkHTMLAttributes<T> {
    fetchPriority?: 'high' | 'low' | 'auto';
  }
}
