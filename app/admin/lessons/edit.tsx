
import {Edit,TextInput,SimpleForm,required,ReferenceInput,NumberInput} from "react-admin";

export const LessonEdit=()=>{
    return(
     <Edit>
       <SimpleForm>
       <NumberInput source="id" validate={[required()]} label="Id"/>
       <TextInput source="title" validate={[required()]} label="Title"/>
         < ReferenceInput source="unitsId" reference="units"/>
         <NumberInput source="order" validate={[required()]} label="Order"/>
       </SimpleForm>
     </Edit>
    )

}