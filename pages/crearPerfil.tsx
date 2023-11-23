// Importa las dependencias necesarias
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation, useQuery } from '@apollo/client';
import { GET_USER_BY_EMAIL } from '@/graphql/client/user';
import { CREATE_PROFILE } from '@/graphql/client/profile';
import { useUserData } from '@/hooks/useUserData';
import { Loading } from '@/components/ui/Loading';

// Componente CrearPerfil
const crearPerfil = () => {
  const {loading: loadingUser, session, status, userData} = useUserData();
  const router = useRouter();
  const userId = userData?.user.id
  const userEmail = userData?.user.email

  /*const { loading, error, data } = useQuery(GET_USER_BY_EMAIL, { 
    variables:{email: userEmail} 
  });*/

  const [hobbies, setHobbies] = useState('');
  const [type, setType] = useState('');
  const [faculty, setFaculty] = useState('');
  const [career, setCareer] = useState('');
  const [campus, setCampus] = useState('');
  const [description, setDescription] = useState('');
  const [socialLinks, setSocialLinks] = useState('');



  const [crearPerfil] = useMutation(CREATE_PROFILE);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await crearPerfil({
        variables: {
          userId,
          faculty,
          career,
          type,
          campus,
          description,
          hobbies,
          socialLinks,
        },
      });

      router.push('/home');
    } catch (error) {
      console.error('Error al crear o actualizar el perfil', error);
    }
  };


  if(loadingUser) return (<Loading/>)


  return (
    <div>
      <h1>Crear Perfil</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Hobbies:
          <input
            type="text"
            value={hobbies}
            onChange={(e) => setHobbies(e.target.value)}
          />
        </label>
        <br />
        <label>
          Tipo de Usuario:
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="Seleccionar">Seleccionar</option>
            <option value="Estudiante">Estudiante</option>
            <option value="Profesor">Profesor</option>
            <option value="Egresado">Egresado</option>
            <option value="Administrativo">Administrativo</option>
          </select>
        </label>
        <br />
        <label>
          Campus:
          <select
            value={campus}
            onChange={(e) => setCampus(e.target.value)}
          >
            <option value="Seleccionar2">Seleccionar</option>
            <option value="Ciudad_Universitaria">Udea</option>
          </select>
        </label>
        <br />
        <label>
          Facultad:
          <input
            type="text"
            value={faculty}
            onChange={(e) => setFaculty(e.target.value)}
          />
        </label>
        <br />
        <label>
          Carrera:
          <input
            type="text"
            value={career}
            onChange={(e) => setCareer(e.target.value)}
          />
        </label>
        <br />
        <label>
          Descripción:
          <input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </label>
        <br />
        <label>
          Social Links:
          <input
            type="text"
            value={socialLinks}
            onChange={(e) => setSocialLinks(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Guardar Perfil</button>
      </form>
    </div>
  );
};

export default crearPerfil;
