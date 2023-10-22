import camelcaseKeys from 'camelcase-keys';

export const normalizeJsonApiIfNeed: any = (data: any) => {
  // detect xml file
  if (typeof data === 'string') {
    if (data.includes('xml')) {
      const newData = parseXmlToJson(data);
      return camelcaseKeys(newData, { deep: true });
    }
    return camelcaseKeys({ message: data }, { deep: true });
  } else if (typeof data === 'object') {
    const values = Object.values(data);
    const valuesStr = values.join('');

    if (valuesStr.includes('xml') || valuesStr.includes('html')) {
      return normalizeJsonApiIfNeed(valuesStr);
    }
  }

  return camelcaseKeys(data, { deep: true });
};

function parseXmlToJson(xml: string) {
  const json: any = {};
  for (const res of xml.matchAll(
    /(?:<(\w*)(?:\s[^>]*)*>)((?:(?!<\1).)*)(?:<\/\1>)|<(\w*)(?:\s*)*\/>/gm,
  )) {
    const key = res[1] || res[3];
    const value = res[2] && parseXmlToJson(res[2]);
    json[key] = (value && Object.keys(value).length ? value : res[2]) || null;
  }
  return json;
}
