'use client'

import { useParams } from 'next/navigation'
import ProductDetail from '@/components/pages/ProductDetail'

export default function ProductDetailPage() {
  const params = useParams()
  return <ProductDetail productId={params.productId} />
}

