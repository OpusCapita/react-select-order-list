import chai from 'chai';
import chaiImmutable from 'chai-immutable';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-15.4';

Enzyme.configure({ adapter: new Adapter() });

chai.use(chaiImmutable);
