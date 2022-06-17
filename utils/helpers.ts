type Field = {
  name: string,
  optional?: boolean,
  processor?: Function
}

type GetFieldsResult = {
  values: Record<string, any>
  error?: string
}

const Helpers = {
  getFields(fields: Field[], src: Record<string, any>): GetFieldsResult {
    const values: Record<string, any> = {}

    for (const { name, optional, processor } of fields) {
      if (src[name] !== undefined) {
        try {
          values[name] = (processor ? processor : (val: any) => val)(src[name])
        } catch (error) {
          return { values, error: `Invalid value for \`${name}\`` }
        }
      } else if (!optional) {
        return { values, error: `Missing field \`${name}\`` }
      }
    }

    return { values }
  }
}

export default Helpers
