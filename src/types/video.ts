export type VideoCategory = 'FPS';

export interface HighlightVideo {
  id: string;
  title: string;
  game: string;
  category: VideoCategory;
  duration: string;
  date: string;
  coverUrl: string;
  videoUrl: string;
  description: string;
  tags: string[];
}

export type SortMode = 'latest' | 'shortest';
