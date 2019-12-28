const isRequiredMsg = fieldName => 'validationMessages.required', { fieldName: fieldName }

const mustMatchMsg = otherFieldName => {
  return (fieldName) => 'validationMessages.mustMatch', {fieldName, otherFieldName}
};

const mustDifferMsg = otherFieldName => {
  return (fieldName) => 'validationMessages.mustDiffer', {fieldName, otherFieldName}
};

const minLengthMsg = length => {
  return (fieldName) => 'validationMessages.minLength', {fieldName, length}
};

const maxLengthMsg = length => {
  return (fieldName) => 'validationMessages.maxLength', {fieldName, length}
};

const regexMsg = fieldName => {
  return t('validationMessages.regex', { fieldName: fieldName })
}

const emailMsg = fieldName => 'validationMessages.email', {fieldName}

const minValueMsg = fieldName => {
  return (minValue) => 'validationMessages.minValue', {fieldName, minValue}
}

export const required = text => {
  if (text) {
    return null
  } else {
    return isRequiredMsg
  }
}

export const mustMatch = (field, fieldName) => {
  return (text, state) => {
    return state[field] == text ? null : mustMatchMsg(fieldName)
  }
}

export const mustDiffer = (field, fieldName) => {
  return (text, state) => {
    return state[field] != text ? null : mustDifferMsg(fieldName)
  }
}

export const minLength = length => {
  return text => {
    return (!text ? 0 : text.length) >= length ? null : minLengthMsg(length)
  }
}

export const maxLength = length => {
  return text => {
    return (!text ? 0 : text.length) <= length ? null : maxLengthMsg(length)
  }
}

export const regex = regex => {
  return text => {
    return regex.test(text) ? null : regexMsg
  }
}

export const email = text => {
  var re = /^$|^([\w\.\-]+)@([\w\-]+)((\.(\w){2,3})+)$/
  return re.test(text) ? null : emailMsg
}

export const minValue = value => {
  return fieldValue => {
    return fieldValue && fieldValue >= value ? null : minValueMsg(value)
  }
}

export const runValidation = (model, runners) => {
  return runners.reduce((memo, runner) => {
      return Object.assign(memo, runner(model));
  }, {});
};

export const hasErrors = (validationErrors) => {
  for (var key in validationErrors) {
      if (validationErrors.hasOwnProperty(key)) {
          return true;
      }
  }
  return false;
}

export const ruleRunner = (field, name, ...validations) => {
  return (state) => {
      for (let v of validations) {
          let errorMessageFunc = v(state[field], state);
          if (errorMessageFunc) {
              return {[field]: errorMessageFunc(name)};
          }
      }
      return null;
  };
};
