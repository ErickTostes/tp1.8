import React, { useState } from 'react';

function SkillsForm() {
  const [skills, setSkills] = useState(['']); // Inicializa com um campo vazio

  const handleSkillChange = (index, value) => {
    const newSkills = [...skills];
    newSkills[index] = value;
    setSkills(newSkills);
  };

  const addSkillField = () => {
    setSkills([...skills, '']); 
  };

  const removeSkillField = (index) => {
    const newSkills = skills.filter((_, i) => i !== index);
    setSkills(newSkills);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Habilidades: ' + skills.join(', '));
  };

  return (
    <div className="skills-form">
      <h2>Adicionar Habilidades</h2>
      <form onSubmit={handleSubmit}>
        {skills.map((skill, index) => (
          <div key={index} className="skill-input">
            <input
              type="text"
              value={skill}
              onChange={(e) => handleSkillChange(index, e.target.value)}
              placeholder="Habilidade"
              required
            />
            <button type="button" onClick={() => removeSkillField(index)}>
              Remover
            </button>
          </div>
        ))}
        <button type="button" onClick={addSkillField}>
          Adicionar Habilidade
        </button>
        <button type="submit">Salvar Habilidades</button>
      </form>
    </div>
  );
}

export default SkillsForm;
