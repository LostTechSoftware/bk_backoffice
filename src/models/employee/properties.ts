interface Return {
    name: StringConstructor;
    email: {
        type: StringConstructor,
        required: true
    };
    password: {
        type: StringConstructor,
        select: false
    };
    twoFactorCode: {
      type: NumberConstructor,
    };
    attemptCount: {
      type: NumberConstructor,
      default: 0
    };
    bloqued: {
      type: BooleanConstructor,
      default: false
    };
    ipIsCreated: StringConstructor;
}

const getproperties = (): Return => {
  return {
    name: String,
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      select: false
    },
    twoFactorCode: {
      type: Number
    },
    attemptCount: {
      type: Number,
      default: 0
    },
    bloqued: {
      type: Boolean,
      default: false
    },
    ipIsCreated: String
  }
}

export default getproperties
