import React from 'react';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { FieldArray } from 'formik';
import MultipleChipInput from '../../../components/MultipleChipInput';

/* eslint react/prop-types: 0 */
class GeneralInfoEdit extends React.Component {
  render() {
    const { values = {}, handleChange } = this.props;

    return (
      <React.Fragment>
        <FormControl margin="normal" fullWidth={true}>
          <MultipleChipInput
            label="Work And Experience"
            defaultValue={values.workAndExperience}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl margin="normal" fullWidth={true}>
          <MultipleChipInput
            label="Skills"
            defaultValue={values.skills}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl margin="normal" fullWidth={true}>
          <InputLabel htmlFor="name">College</InputLabel>

          <Input
            id="college"
            name="college"
            value={values.college}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl margin="normal" fullWidth={true}>
          <FieldArray
            name="otherDegreeAndCourses"
            render={arrayHelpers => (
              <MultipleChipInput
                id="otherDegreeAndCourses"
                type="string"
                name="otherDegreeAndCourses"
                label="Other Degree and Courses"
                defaultValue={values.otherDegreeAndCourses}
                onUpdateInput={handleChange}
                onAdd={chipValue => {
                  arrayHelpers.push('');
                  return true;
                }}
              />
            )}
          />
        </FormControl>

        <FormControl margin="normal" fullWidth={true}>
          <MultipleChipInput
            label="Career Objectives"
            defaultValue={values.careerObjectives}
            onChange={handleChange}
          />
        </FormControl>
      </React.Fragment>
    );
  }
}

export default GeneralInfoEdit;
