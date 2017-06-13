import {defineMessages} from "react-intl";

const homePage = defineMessages({
  title: {
    id: "homePage_title",
    defaultMessage: "Home page",
  }
});

const topicPage = defineMessages({
  title: {
    id: "topicPage_title",
    defaultMessage: "Topic",
  }
});

const topicFilter = defineMessages({
  recents: {
    id: "topic_filter_recents",
    defaultMessage: "Recents",
  },
  favorites: {
    id: "topic_filter_favorites",
    defaultMessage: "Favorites",
  },
  hot: {
    id: "topic_filter_hot",
    defaultMessage: "Hot",
  }
});

const reaction = defineMessages({
  feel: {
    id: "reaction_feel",
    defaultMessage: "Feel",
  },
  love: {
    id: "reaction_love",
    defaultMessage: "Love",
  },
  sad: {
    id: "reaction_sad",
    defaultMessage: "Sad",
  },
  worry: {
    id: "reaction_worry",
    defaultMessage: "Worry",
  },
  agree: {
    id: "reaction_agree",
    defaultMessage: "Agree",
  },
  disagree: {
    id: "reaction_disagree",
    defaultMessage: "Disagree",
  }
});

export default {homePage, topicPage, topicFilter};