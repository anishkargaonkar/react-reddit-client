import { Search } from "./Search";

export interface ResizedIcon {
  url: string;
  width: number;
  height: number;
}

export interface Source {
  url: string;
  width: number;
  height: number;
}

export interface Resolution {
  url: string;
  width: number;
  height: number;
}

export interface Image {
  source: Source;
  resolutions: Resolution[];
  id: string;
}

export interface Preview {
  images: Image[];
  enabled: boolean;
}

export interface Result {
  approved_at_utc?: any;
  subreddit: string;
  selftext: string;
  author_fullname: string;
  saved: boolean;
  mod_reason_title?: any;
  gilded: number;
  clicked: boolean;
  title: string;
  subreddit_name_prefixed: string;
  hidden: boolean;
  pwls: number;
  link_flair_css_class: string;
  downs: number;
  thumbnail_height?: number;
  top_awarded_type: string;
  hide_score: boolean;
  name: string;
  quarantine: boolean;
  link_flair_text_color: string;
  upvote_ratio: number;
  author_flair_background_color: string;
  subreddit_type: string;
  ups: number;
  total_awards_received: number;
  thumbnail_width?: number;
  author_flair_template_id: string;
  is_original_content: boolean;
  user_reports: any[];
  secure_media?: any;
  is_reddit_media_domain: boolean;
  is_meta: boolean;
  category?: any;
  link_flair_text: string;
  can_mod_post: boolean;
  score: number;
  approved_by?: any;
  author_premium: boolean;
  thumbnail: string;
  edited: any;
  author_flair_css_class: string;
  content_categories?: any;
  is_self: boolean;
  mod_note?: any;
  created: number;
  link_flair_type: string;
  wls: number;
  removed_by_category?: any;
  banned_by?: any;
  author_flair_type: string;
  domain: string;
  allow_live_comments: boolean;
  selftext_html: string;
  likes?: any;
  suggested_sort: string;
  banned_at_utc?: any;
  view_count?: any;
  archived: boolean;
  no_follow: boolean;
  is_crosspostable: boolean;
  pinned: boolean;
  over_18: boolean;
  awarders: any[];
  media_only: boolean;
  can_gild: boolean;
  spoiler: boolean;
  locked: boolean;
  author_flair_text: string;
  treatment_tags: any[];
  visited: boolean;
  removed_by?: any;
  num_reports?: any;
  distinguished?: any;
  subreddit_id: string;
  mod_reason_by?: any;
  removal_reason?: any;
  link_flair_background_color: string;
  id: string;
  is_robot_indexable: boolean;
  report_reasons?: any;
  author: string;
  discussion_type?: any;
  num_comments: number;
  send_replies: boolean;
  whitelist_status: string;
  contest_mode: boolean;
  mod_reports: any[];
  author_patreon_flair: boolean;
  author_flair_text_color: string;
  permalink: string;
  parent_whitelist_status: string;
  stickied: boolean;
  url: string;
  subreddit_subscribers: number;
  created_utc: number;
  num_crossposts: number;
  media?: any;
  is_video: boolean;
  post_hint: string;
  url_overridden_by_dest: string;
  preview: Preview;
  link_flair_template_id: string;
}

export interface SearchResults {
  after: string;
  dist: number;
  modhash: string;
  children: {
    kind: string;
    data: Result;
  };
  before?: any;
}

export interface Search {
  kind: string;
  data: SearchResults;
}

export interface SearchQuery {
  query: string;
  limit: number;
};

interface Errors {
  results: Error | null
}

export enum SearchActionTypes {
  GET_RESULTS_REQUEST = "@@search/GET_RESULTS_REQUEST",
  GET_RESULTS_SUCCESS = "@@search/GET_RESULTS_SUCCESS",
  GET_RESULTS_ERROR = "@@search/GET_RESULTS_ERROR",
}

export interface SearchState {
  isLoading: boolean,
  results: Search | null,
  errors: Errors
}