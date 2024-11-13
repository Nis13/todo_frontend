import {
  format,
  formatDistanceToNow,
  parseISO,
  isBefore,
  subDays,
} from "date-fns";

export const formatDate = (dateString: string) => {
  const date = parseISO(dateString);
  const yesterday = subDays(new Date(), 1);

  if (isBefore(date, yesterday)) {
    return format(date, "MMM d, yyyy");
  }
  return formatDistanceToNow(date, { addSuffix: true });
};
