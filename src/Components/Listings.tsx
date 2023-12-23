import CategoryTag from '../Utilities/CategoryTag';
import StatusTag from '../Utilities/StatusTag';

type job = {
    id: string,
    company: string,
    logo: string,
    new: boolean,
    featured: boolean,
    position: string,
    role: string,
    level: string,
    postedAt: string,
    contract: string,
    location: string,
    languages: string[],
    tools: string[]
}

const Listings = ({jobs}: any) => {

  return (
    <div className='listings'>
      {jobs.map((job: job) => {
        const categories = [job.role, job.level, ...job.tools];
        const highlight = job.new && job.featured;

        return(
        <div key={job.id} className={(highlight && 'highlight') + ' filter-tablet'}>
            <div className='job-info'>
                <img className='company-logo' src={job.logo} />
                <div className='company-listing'>
                    <div className='top-section'>
                      <p className='company'>{job.company}</p>
                      {job.new && <StatusTag>NEW!</StatusTag>}
                      {job.featured && <StatusTag>FEATURED</StatusTag>}
                    </div>
                    <p className='position'>{job.position}</p>
                    <p className='description'>{job.postedAt} # {job.contract} # {job.location}</p>
                </div>
            </div>
            <hr className='info-div'></hr>
            <div className='categories'>
              {categories.map((tool, id) => <CategoryTag key={id}>{tool}</CategoryTag>)}
            </div>
        </div>)
        }
      )}
    </div>
  )
}

export default Listings
