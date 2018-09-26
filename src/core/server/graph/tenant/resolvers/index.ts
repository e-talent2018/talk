import Cursor from "talk-server/graph/common/scalars/cursor";
import { GQLResolver } from "talk-server/graph/tenant/schema/__generated__/types";

import Asset from "./asset";
import AuthIntegrations from "./auth_integrations";
import Comment from "./comment";
import CommentCounts from "./comment_counts";
import Mutation from "./mutation";
import Profile from "./profile";
import Query from "./query";

const Resolvers: GQLResolver = {
  Asset,
  AuthIntegrations,
  Comment,
  CommentCounts,
  Cursor,
  Mutation,
  Profile,
  Query,
};

export default Resolvers;
