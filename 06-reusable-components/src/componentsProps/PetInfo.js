function PetInfo(props) {
    const { animal, year, hasPet } = props;
    const text = hasPet
        ? `My ${animal} is ${year} years old`
        : "I don't have animals";
    return <h1>{text}</h1>;
}
export default PetInfo;
