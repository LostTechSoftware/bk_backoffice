interface Return {
    name: StringConstructor;
    email: {
      type: StringConstructor;
    };
    blocked: {
      type: BooleanConstructor,
      default:false
    };
}

const getproperties = (): Return => {
  return {
    name: String,
    email: {
      type: String
    },
    blocked: {
      type: Boolean,
      default: false
    }
  }
}

export default getproperties
