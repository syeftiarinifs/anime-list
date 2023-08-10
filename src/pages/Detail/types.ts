interface GenreProps {
  name: string
}
  
export interface AnimeDetailProps {
  images: {
    jpg: {
      large_image_url: string;
    }
  };
  title: string;
  genres: GenreProps[];
  synopsis: string;
}
  