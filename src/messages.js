import {defineMessages} from "react-intl";

const homePage = defineMessages({
  ok: {
    id: "homePage.title",
    defaultMessage: "Home page",
  }
});

const topicPage = defineMessages({
  stepOfStep: {
    id: "topicPage.label.topic",
    defaultMessage: "Topic",
  }
});

const filter = defineMessages({
  recents: {
    id: "topic.filter.recents",
    defaultMessage: "Recents",
  }
});

export default {homePage, topicPage, filter};