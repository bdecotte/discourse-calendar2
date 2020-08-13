export function buildParams(startsAt, endsAt, eventModel) {
  const params = {};

  if (startsAt) {
    params.start = moment(startsAt)
      .utc()
      .format("YYYY-MM-DD HH:mm");
  } else {
    params.start = moment()
      .utc()
      .format("YYYY-MM-DD HH:mm");
  }

  if (eventModel.status) {
    params.status = eventModel.status;
  }

  if (eventModel.name) {
    params.name = eventModel.name;
  }

  if (eventModel.url) {
    params.url = eventModel.url;
  }

  if (eventModel.recurrence) {
    params.recurrence = eventModel.recurrence;
  }

  if (endsAt) {
    params.end = moment(endsAt)
      .utc()
      .format("YYYY-MM-DD HH:mm");
  }

  if (eventModel.status === "private") {
    params.allowedGroups = (eventModel.raw_invitees || []).join(",");
  }

  if (eventModel.status === "public") {
    params.allowedGroups = "trust_level_0";
  }

  if (eventModel.reminders && eventModel.reminders.length) {
    params.reminders = eventModel.reminders
      .map(r => {
        // we create a new intermediate object to avoid changes in the UI while
        // we prepare the values for request
        const reminder = Object.assign({}, r);

        if (reminder.period === "after") {
          reminder.value = `-${Math.abs(parseInt(reminder.value, 10))}`;
        }
        if (reminder.period === "before") {
          reminder.value = Math.abs(parseInt(`${reminder.value}`, 10));
        }

        return `${reminder.value}.${reminder.unit}`;
      })
      .join(",");
  }

  return params;
}

export function replaceRaw(params, raw) {
  const eventRegex = new RegExp(`\\[event\\s(.*?)\\]`, "m");
  const eventMatches = raw.match(eventRegex);

  if (eventMatches && eventMatches[1]) {
    const markdownParams = [];
    Object.keys(params).forEach(param => {
      const value = params[param];
      if (value && value.length) {
        markdownParams.push(`${param}="${params[param]}"`);
      }
    });

    return raw.replace(eventRegex, `[event ${markdownParams.join(" ")}]`);
  }

  return false;
}