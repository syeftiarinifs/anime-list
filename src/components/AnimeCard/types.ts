export interface AnimeProps {
  anime: {
    images: {
      webp: {
        small_image_url: string
      }
    };
    title: string;
    background: string;
    mal_id: number;
  }
}