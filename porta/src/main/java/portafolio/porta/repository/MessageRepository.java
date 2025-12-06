package portafolio.porta.repository;
import org.springframework.data.jpa.repository.JpaRepository; // ¡Cambiamos a JpaRepository!
import org.springframework.stereotype.Repository;
import portafolio.porta.Model.Message;


@Repository
// JpaRepository hereda los métodos CrudRepository (deleteById, existsById)
// y PagingAndSortingRepository (findAll(Pageable)).
public interface MessageRepository extends JpaRepository<Message, Long> {

}