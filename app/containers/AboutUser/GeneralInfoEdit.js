import React from 'react';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import { FieldArray } from 'formik';
import MultipleChipInput from '../../components/MultipleChipInput';

/* eslint react/prop-types: 0 */
class GeneralInfoEdit extends React.Component {
  render() {
    const { values = {}, handleChange } = this.props;

    return (
      <React.Fragment>
        <FormControl margin="normal" fullWidth>
          <FieldArray
            name="workAndExperience"
            render={arrayHelpers => (
              <MultipleChipInput
                id="workAndExperience"
                type="string"
                name="workAndExperience"
                label="Work And Experience"
                defaultValue={values.workAndExperience}
                onUpdateInput={handleChange}
                onAdd={() => {
                  arrayHelpers.push('');
                  return true;
                }}
              />
            )}
          />
        </FormControl>

        <FormControl margin="normal" fullWidth>
          <FieldArray
            name="skills"
            render={arrayHelpers => (
              <MultipleChipInput
                id="skills"
                type="string"
                name="skills"
                label="Skills"
                defaultValue={values.skills}
                onUpdateInput={handleChange}
                onAdd={() => {
                  arrayHelpers.push('');
                  return true;
                }}
              />
            )}
          />
        </FormControl>

        <FormControl margin="normal" fullWidth>
          <InputLabel htmlFor="name">College</InputLabel>

          <Input
            id="college"
            name="college"
            value={values.college}
            onChange={handleChange}
          />
        </FormControl>

        <FormControl margin="normal" fullWidth>
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
                onAdd={() => {
                  arrayHelpers.push('');
                  return true;
                }}
              />
            )}
          />
        </FormControl>

        <FormControl margin="normal" fullWidth>
          <FieldArray
            name="careerObjectives"
            render={arrayHelpers => (
              <MultipleChipInput
                id="careerObjectives"
                type="string"
                name="careerObjectives"
                label="Career Objectives"
                defaultValue={values.careerObjectives}
                onUpdateInput={handleChange}
                onAdd={() => {
                  arrayHelpers.push('');
                  return true;
                }}
              />
            )}
          />
        </FormControl>
      </React.Fragment>
    );
  }
}

export default GeneralInfoEdit;
