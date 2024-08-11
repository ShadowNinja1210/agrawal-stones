import _ from "lodash";

export const ReverseKebab = (item: string) => _.startCase(_.toLower(item));
