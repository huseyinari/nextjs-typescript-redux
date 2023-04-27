import { NextPage } from "next";
import { useState } from "react";
// components
import Input from "@/src/components/forms/Input";
import InputGroup from "@/src/components/forms/InputGroup";
import Container from "@/src/components/layouts/Container";
import InputGroupText from "@/src/components/forms/InputGroupText";
import TextArea from "@/src/components/forms/TextArea";
import Button, { ButtonType } from "@/src/components/forms/Button";

interface IAddPost {

}

const AddPost: NextPage<IAddPost> = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    return (
        <Container>
            <InputGroup type="mb-3">
                <InputGroupText text="Başlık"/>
                <Input placeholder="Başlık" value={title} onChange={(val: string) => setTitle(val)} />
            </InputGroup>
            <InputGroup type="mb-3">
                <InputGroupText text="Açıklama" />
                <TextArea placeholder="Açıklama" value={body} onChange={(val: string) => setBody(val)} />
            </InputGroup>
            <Button text="Kaydet" type={ButtonType.SUCCESS} onClick={() => {}} />
        </Container>
    )
}
export default AddPost;