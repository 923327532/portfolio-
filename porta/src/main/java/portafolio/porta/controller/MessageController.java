package portafolio.porta.controller;
import org.springframework.data.domain.*;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;
import lombok.RequiredArgsConstructor;
import portafolio.porta.Model.Message;
import portafolio.porta.repository.MessageRepository;

@RestController
@CrossOrigin(origins = "*") // Permite peticiones desde tu Frontend de Angular
@RequestMapping("/api/v1")
@RequiredArgsConstructor // Inyecta MessageRepository
public class MessageController {

    private final MessageRepository messageRepository;

    // --- RUTA PÚBLICA: POST /api/v1/messages ---
    // (CREAR: Un usuario envía un mensaje de contacto)
    @PostMapping("/messages")
    public ResponseEntity<Message> createMessage(@RequestBody Message message) {
        if (message.getSentAt() == null) {
            message.setSentAt(LocalDateTime.now());
        }
        Message savedMessage = messageRepository.save(message);
        // Retorna 201 CREATED
        return ResponseEntity.status(201).body(savedMessage);
    }

    // --- RUTA PRIVADA (ADMIN): GET /api/v1/admin/messages ---
    // (LEER: Solo el administrador puede ver los mensajes con paginación)
    @GetMapping("/admin/messages")
    public Page<Message> getAllMessages(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(defaultValue = "sentAt") String sortBy) {

        // Ordena por sentAt (fecha de envío) de forma descendente (más recientes primero)
        Sort sort = Sort.by(sortBy).descending();
        Pageable pageable = PageRequest.of(page, size, sort);
        return messageRepository.findAll(pageable);
    }

    // --- RUTA PRIVADA (ADMIN): DELETE /api/v1/admin/messages/{id} ---
    // (ELIMINAR: El administrador elimina un mensaje)
    @DeleteMapping("/admin/messages/{id}")
    public ResponseEntity<Void> deleteMessage(@PathVariable Long id) {
        if (!messageRepository.existsById(id)) {
            return ResponseEntity.notFound().build();
        }
        messageRepository.deleteById(id);
        // Retorna 204 NO CONTENT (Éxito sin contenido de retorno)
        return ResponseEntity.noContent().build();
    }
}