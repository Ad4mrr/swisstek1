import type { CSSProperties } from 'react';
import { MediaImage } from '@/components/media/MediaImage';
import { getProductMedia } from '@/data/media';
import type { Product } from '@/data/products';

export function ProductPack({ product, large = false }: { product: Product; large?: boolean }) {
  const media = getProductMedia(product.slug);
  const style = { '--pack-tone': product.tone } as CSSProperties;

  if (media?.pack) {
    return (
      <div className={`product-pack official-pack ${large ? 'large' : ''}`} style={style}>
        <MediaImage
          mediaKey={media.pack}
          alt={`${product.name} product pack`}
          className="product-pack-image"
          sizes={large ? '(max-width: 760px) 70vw, 38vw' : '(max-width: 760px) 48vw, 18vw'}
          priority={large}
          fill
        />
      </div>
    );
  }

  return (
    <div className={`product-pack catalogue-pack ${large ? 'large' : ''}`} style={style} role="img" aria-label={`${product.name} catalogue pack representation`}>
      <div className="pack-side" />
      <div className="pack-face">
        <span className="pack-brand">SWISSTEK</span>
        <span className="pack-code">{product.code}</span>
        <strong>{product.name}</strong>
        <small>{product.category} SYSTEM</small>
        <i>EXPLORE THE<br />PRODUCT SYSTEM</i>
      </div>
    </div>
  );
}
