interface Return {
  title: StringConstructor;
  body: StringConstructor;
  schedule: DateConstructor;
  tokens: [];
  send: {
      type: NumberConstructor;
      default: 0
  };
  convert: {
      type: NumberConstructor,
      default: 0
  };
  sended: {
    type: BooleanConstructor,
    default: false
  };
}

const getproperties = (): Return => {
  return {
    title: String,
    body: String,
    send: {
      type: Number,
      default: 0
    },
    convert: {
      type: Number,
      default: 0
    },
    schedule: Date,
    tokens: [],
    sended: {
      type: Boolean,
      default: false
    }
  }
}

export default getproperties
