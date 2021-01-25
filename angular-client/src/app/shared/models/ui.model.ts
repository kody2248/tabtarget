export interface Ui {

  _id: string,
  name: string,
  images: string[],
  slug: string,
  url: string,
  tags: any,
  user: {
      name: string,
      userID: string,
      role: string
  },
  date: {
      created: Date,
      modified: Date
  },
  description: string,
  visibile: {
      private: boolean, //Only creator
      hidden: boolean, // Direct link
      restricted: any, //Restricts view to specific users. False by default, list of user IDs if being used
      password: any //Password protected item. False by default, string of hashed password otherwise
  },
  views: number,
  comments: number,
  favorites: number,
  downloads: number

}
