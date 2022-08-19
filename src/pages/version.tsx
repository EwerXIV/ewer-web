import { useParams } from 'react-router-dom';
import VersionInfoHeader from '../components/VersionInfoHeader';
import { gql, useQuery } from '@apollo/client';
import { Spinner } from 'react-bootstrap';

const QUERY = gql`
  query GetVersionInfo($repositorySlug: String!, $versionString: String!) {
    version(repositorySlug: $repositorySlug, versionString: $versionString) {
      id
      versionString
      isActive
      firstOffered
      lastOffered
      
      repository {
        latestVersion {
          id
          versionString
        }
      }

      prerequisiteVersions {
        id
        versionString
      }

      dependentVersions {
        id
        versionString
      }

      patches {
        id
      }
    }
  }
`;

export default function VersionPage() {
  const { repoName, versionId } = useParams();

  const { loading, data } = useQuery(QUERY, {
    variables: {
      repositorySlug: repoName,
      versionString: versionId,
    }
  });

  if (loading) {
    return <Spinner animation='border' />;
  }

  if (!data.version) {
    return <p>Version not found.</p>;
  }

  const latest = data.version.repository.latestVersion.versionString === data.version.versionString;
  return (
    <>
      <div className='row'>
        <VersionInfoHeader version={data.version} latest={latest} />
      </div>
    </>
  );
}