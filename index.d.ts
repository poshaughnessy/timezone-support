type DateInput = Date | number

interface TimeZoneInfo {
  name: string
}

interface TimeZoneOffset {
  abbreviation?: string
  offset: number
}

interface Time {
  year: number
  month: number
  day: number
  hours: number
  minutes: number
  seconds?: number
  milliseconds?: number
  dayOfWeek?: number
  epoch?: number
  zone?: TimeZoneOffset
}

interface SetTimeZoneOptions {
  useUTC: boolean
}

declare function listTimeZones (): Array<string>
declare function findTimeZone (name: string): TimeZoneInfo

declare function getUTCOffset (date: DateInput, timeZone: TimeZoneInfo): TimeZoneOffset
declare function getZonedTime (date: DateInput, timeZone: TimeZoneInfo): Time
declare function getUnixTime (time: Time, timeZone?: TimeZoneInfo): number
declare function setTimeZone (time: Date | Time, timeZone: TimeZoneInfo, options?: SetTimeZoneOptions): Time

declare function convertTimeToDate (time: Time): Date
declare function convertDateToTime (date: Date): Time

export {
  listTimeZones, findTimeZone, getUTCOffset, getZonedTime, getUnixTime, setTimeZone, convertTimeToDate, convertDateToTime
}

declare module 'timezone-support' {
  export {
    listTimeZones, findTimeZone, getUTCOffset, getZonedTime, getUnixTime, setTimeZone, convertTimeToDate, convertDateToTime
  }
}

declare module 'timezone-support/dist/lookup-convert' {
  interface PackedTimeZones {
    [ key: string ]: string
  }

  interface TimeZoneData {
    zones: PackedTimeZones
    links: Array<string>
  }

  function populateTimeZones (TimeZoneData)

  export {
    populateTimeZones, listTimeZones, findTimeZone, getUTCOffset, getZonedTime, getUnixTime, setTimeZone, convertTimeToDate, convertDateToTime
  }
}

declare module 'timezone-support/dist/parse-format' {
  function parseZonedTime (input: string, format: string): Time
  function formatZonedTime (time: Time, format: string): string

  export { parseZonedTime, formatZonedTime }
}

// export as namespace timezoneSupport;