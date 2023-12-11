import { useState } from "react"
import { useId } from "react"

const AddArticle = (props)=>{
    const [formData, setFormdata] = useState(
        {
            'id':'',
            'title':'',
            'description':''
        }
    )

    const handleChange = (event)=>{
        setFormdata(
            {   
                ...formData,
                [event.target.name]:event.target.value
            }
        )
    }

    const submitHandler = (event)=>{
        event.preventDefault();
        props.onSave(formData)
    }

    console.log(formData)
    return( 
        <form className="form" onSubmit={submitHandler}>
            <div className="form-group">
                <input type="text" name="tittle"placeholder="Naujienos pavadinimas" className="m-1 form-control" onChange={handleChange}>
                </input>
            </div>
            <div className="form-group">
                <textarea name="description" placeholder="Naujienos tekstas" className="m-1 form-control" onChange={handleChange}></textarea>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Saugoti</button>
            </div>

        </form>
    )
}

export default AddArticle