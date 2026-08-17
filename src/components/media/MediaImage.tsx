import Image, { type ImageProps } from 'next/image';
import { getMedia } from '@/data/media';

export interface MediaImageProps extends Omit<ImageProps, 'src' | 'alt'> {
  mediaKey: string;
  alt?: string;
}

export function MediaImage({ mediaKey, alt, sizes, fill = true, ...props }: MediaImageProps) {
  const media = getMedia(mediaKey);
  if (!media) return <span className="media-missing" aria-hidden="true" />;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';
  const source = media.localUrl ? `${basePath}${media.localUrl}` : media.sourceUrl;

  return (
    <Image
      {...props}
      src={source}
      alt={alt ?? media.alt}
      fill={fill}
      sizes={sizes ?? '100vw'}
    />
  );
}
