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

  const handleSubmit = async (e: { preventDefault: () => void; }) => {
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
    <div className='Yellow-little flex justify-center items-center h-screen '>
      <div className='flex flex-col justify-center items-center gap-4 w-3/4 h-3/4 rounded-2xl Yellow-little'>
        <h1>CREAR PERFIL</h1>
        <form onSubmit={handleSubmit}  className='w-1/2 h-4/5 flex flex-col justify-center items-center gap-4'>
          <label className='w-full text-center'>
            Hobbies:
            <input className='rounded-md'
              type="text"
              value={hobbies}
              onChange={(e) => setHobbies(e.target.value)}
            />
          </label>
          <label className='text-center w-1/4'>
            Tipo de Usuario:
            <select className='rounded-md text-center'
              value={type}
              onChange={(e) => setType(e.target.value)}
            >
              <option disabled value={''}>Seleccionar</option>
              <option value="Estudiante">Estudiante</option>
              <option value="Profesor">Profesor</option>
              <option value="Egresado">Egresado</option>
              <option value="Administrativo">Administrativo</option>
            </select>
          </label>
          <label className='text-center'>
            Campus:
            <select className='rounded-md text-center'
              value={campus}
              onChange={(e) => setCampus(e.target.value)}
            >
              <option disabled value={''}>Seleccionar</option>
              <option value="Ciudad_Universitaria">Ciudad Universitaria</option>
              <option value="Antigua_Escuela_de_Derecho">Antigua Escuela de Derecho</option>
              <option value="Edificio_Suramericana_del_Centro">Edificio Suramericana</option>
              <option value="Sede_Posgrados_Universidad_de_Antioquia">Sede Posgrados</option>
              <option value="Paraninfo">Paraninfo</option>
              <option value="Liceo_Francisco_Restrepo_Molina">Liceo Francisco Restrepo Molina</option>
              <option value="Seccional_Oriente">Seccional Oriente</option>
              <option value="Seccional_Occidente_de_la_Universidad_de_Antioquia">Seccional Occidente</option>
              <option value="Seccional_Bajo_Cauca">Seccional Bajo Cauca</option>
              <option value="Sede_Sonson_de_la_Universidad_de_Antioquia">Sede Sonsón</option>    

            </select>
          </label>
          <label className='text-center'>
            Facultad:
            <input className='rounded-md'
              type="text"
              value={faculty}
              onChange={(e) => setFaculty(e.target.value)}
            />
          </label>
          <label className='text-center'>
            Carrera:
            <input className='rounded-md'
              type="text"
              value={career}
              onChange={(e) => setCareer(e.target.value)}
            />
          </label>
          <label className='text-center w-full'>
            Descripción:
            <input className='rounded-md'
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </label>
          <label className='text-center'>
            Social Links:
            <input className='rounded-md'
              type="text"
              value={socialLinks}
              onChange={(e) => setSocialLinks(e.target.value)}
            />
          </label>
            <button
              className='ButtonCard flex items-center justify-center' type='submit'>
              Guardar Perfil
            </button>
        </form>
      </div>
    </div>
  );
};

export default crearPerfil;
