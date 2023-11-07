export const formatTime = (time) => {
  const [hours, minutes] = String(time).split(":");
  const hour = parseInt(hours, 10);

  let formattedHour = hour % 12 || 12;
  const period = hour < 12 ? "AM" : "PM";

  formattedHour = formattedHour < 10 ? "0" + formattedHour : formattedHour;
  const formattedTime = `${formattedHour}:${minutes} ${period}`;

  return formattedTime;
};

export const formatDate = (date) => {
  // Extract year, month, and day from the Date object
  const year = date.getFullYear();
  // Months are zero-based (0-Jan, 1-Feb, ...), so we add 1 to match the desired format
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Adding padding for double digits
  const day = date.getDate().toString().padStart(2, "0"); // Adding padding for double digits

  // Form the new date string in 'YYYY-MM-DD' format
  const newDateFormat = `${year}-${month}-${day}`;

  return newDateFormat;
};

export const formatDateToText = (date) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};
