package searchlink.atr.tasks.service.interfaces;

import searchlink.atr.tasks.rest.dto.TaskDTO;
import searchlink.atr.tasks.service.commands.CreateTaskCommand;
import searchlink.atr.tasks.service.commands.PostponeTaskCommand;
import searchlink.atr.tasks.service.commands.ProcessTaskCommand;
import searchlink.atr.tasks.service.commands.UpdateTaskCommand;

import java.time.OffsetDateTime;
import java.util.List;

/**
 *
 */
public interface TaskService {
    TaskDTO create(CreateTaskCommand createOrUpdateTaskCommand);

    TaskDTO update(UpdateTaskCommand createOrUpdateTaskCommand);

    List<TaskDTO> getUnresolvedAndUnposponedTasks(OffsetDateTime date);

    List<TaskDTO> getPostponedForAfter(OffsetDateTime date);

    void process(ProcessTaskCommand processTaskCommand);

    void postponeTask(PostponeTaskCommand postponeTaskCommand);

    TaskDTO findOne(long id);

    List<TaskDTO> findAll();
}
