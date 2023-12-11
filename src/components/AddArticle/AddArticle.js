import { useState } from "react"
let articleId = 0

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
        articleId += 1
        formData.id = articleId
        event.preventDefault();
        props.onSave(formData)
        props.hideForm()
    }

    console.log(formData)
    return( 
        <form className="form" onSubmit={submitHandler}>
            <div className="form-group">
                <input type="text" name="tittle"placeholder="Naujienos pavadinimas" className="m-1 form-control" onChange={handleChange}>
                </input>
            </div>
            <div className="form-group">
                <textarea name="description" placeholder="Naujienos tekstas" className="m-1 form-control" onChange={handleChange} value={formData.description}/>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-primary">Saugoti</button>
            </div>

        </form>
    )
}

export default AddArticle