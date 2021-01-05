import React from 'react';
import {useFormikContext} from 'formik';

import Button from '../Button';

function SubmitButton({title, width, titlecolor}) {
  const {handleSubmit} = useFormikContext();

  return (
    <Button
      title={title}
      onPress={handleSubmit}
      width={width}
      titlecolor={titlecolor}
    />
  );
}

export default SubmitButton;
