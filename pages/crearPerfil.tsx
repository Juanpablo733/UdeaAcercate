// Importa las dependencias necesarias
import { useState } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import { CREATE_PROFILE } from '@/graphql/client/profile';
import { useUserData } from '@/hooks/useUserData';
import { Loading } from '@/components/ui/Loading';

// Componente CrearPerfil
const CrearPerfil = () => {
  const { loading: loadingUser, session, status, userData } = useUserData();
  const router = useRouter();
  const userId = userData?.user.id
  const userEmail = userData?.user.email
  const name = userData?.user.name;

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


  if (loadingUser) return (<Loading />)


  return (
    <>
      <title>
        Crear perfil | UdeAcercate
      </title>
      <div className='Yellow-little flex justify-center items-center h-screen flex-col gap-4'>
        <form className='Form' onSubmit={handleSubmit}>
          <h2 className='FormHeader'>
            Crea tu perfil
          </h2>
          <h3 className='text-[var(--green-hard)] font-bold'>{name}</h3>
          <label className='Label'>
            <span className='LabelText'>
              Hobbies:
            </span>
            <input className='Input'
              type="text"
              value={hobbies}
              onChange={(e) => setHobbies(e.target.value)}
              required
            />
          </label>
          <label className='Label'>
            <div className='flex justify-between'>
              <span className='LabelText'>
                Vínculo:
              </span>
              <select className='rounded-md text-center h-8'
                value={type}
                onChange={(e) => setType(e.target.value)}
                required
              >
                <option disabled value={''}>Seleccionar</option>
                <option value="Estudiante">Estudiante</option>
                <option value="Profesor">Profesor</option>
                <option value="Egresado">Egresado</option>
                <option value="Administrativo">Administrativo</option>
              </select>
            </div>
          </label>
          <label className='
          '>
            <div className='flex justify-between'>
              <span className='LabelText'>
                Campus:
              </span>
              <select className='rounded-md text-center h-8'
                value={campus}
                onChange={(e) => setCampus(e.target.value)}
                required
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
            </div>
          </label>
          <label className='Label'>
            <span className='LabelText'>
              Unidad académica o administrativa:
            </span>
            <input className='Input'
              type="text"
              value={faculty}
              onChange={(e) => setFaculty(e.target.value)}
              required
            />
          </label>
          <label className='Label'>
            <span className='LabelText'>
              Programa o dependencia:
            </span>
            <input className='Input'
              type="text"
              value={career}
              onChange={(e) => setCareer(e.target.value)}
              required
            />
          </label>
          <label className='Label'>
            <span className='LabelText'>
              Descripción:
            </span>
            <input className='Input'
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
          </label>
          <label className='Label'>
            <span className='LabelText'>
              Social Links:
            </span>
            <input className='Input'
              type="text"
              value={socialLinks}
              onChange={(e) => setSocialLinks(e.target.value)}
              required
            />
          </label>
          <button
            className='ButtonCard flex items-center justify-center' type='submit'>
            Guardar Perfil
          </button>
        </form>
      </div>
    </>
  );
};

export default CrearPerfil;
